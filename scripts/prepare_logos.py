"""Prepare the official raster logos used by the portfolio.

The source artwork is never redrawn. This script only converts the baked light
background into alpha, trims empty canvas, and keeps a small optical safety area.
"""

from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path

from PIL import Image, ImageChops, ImageDraw, ImageOps


ROOT = Path(__file__).resolve().parents[1]
DESKTOP = ROOT.parents[1]
OUTPUT_DIR = ROOT / "public" / "assets" / "logos"


@dataclass(frozen=True)
class LogoSource:
    source: Path
    output_name: str
    matte_low: int | None = None
    matte_high: int | None = None
    padding: int = 18
    protect_alltech_disc: bool = False


LOGOS = (
    LogoSource(
        source=DESKTOP / "ALLTECH" / "ALLTECH.png",
        output_name="alltech-logo.png",
        matte_low=3,
        matte_high=52,
        padding=18,
        protect_alltech_disc=True,
    ),
    LogoSource(
        source=DESKTOP / "DS Control" / "icontrol.PNG",
        output_name="icontrol-logo.png",
        padding=8,
    ),
    LogoSource(
        source=DESKTOP / "CONVERA" / "logo full.png",
        output_name="convera-logo.png",
        matte_low=18,
        matte_high=70,
        padding=20,
    ),
    LogoSource(
        source=DESKTOP / "ATHENA" / "logo.png",
        output_name="athena-logo.png",
        matte_low=34,
        matte_high=108,
        padding=20,
    ),
    LogoSource(
        source=DESKTOP / "UMMIA" / "logo.png",
        output_name="ummia-logo.png",
        matte_low=18,
        matte_high=70,
        padding=20,
    ),
)


def smoothstep(value: float) -> float:
    value = max(0.0, min(1.0, value))
    return value * value * (3.0 - (2.0 * value))


def remove_light_matte(
    image: Image.Image,
    *,
    low: int,
    high: int,
    protect_alltech_disc: bool = False,
) -> Image.Image:
    """Turn a near-white matte into alpha while retaining antialiased edges."""

    rgb = image.convert("RGB")
    red, green, blue = rgb.split()
    lightest_background_distance = ImageOps.invert(
        ImageChops.darker(ImageChops.darker(red, green), blue)
    )

    alpha_lut = []
    for distance in range(256):
        progress = (distance - low) / (high - low)
        alpha_lut.append(round(smoothstep(progress) * 255))

    alpha = lightest_background_distance.point(alpha_lut)

    if protect_alltech_disc:
        # The official artwork uses white TECH lettering inside the black disc.
        # Protect only its inner area; the outer edge still receives normal matte
        # cleanup. Coordinates are taken from the untouched 1181px source.
        protected = Image.new("L", rgb.size, 0)
        draw = ImageDraw.Draw(protected)
        draw.ellipse((546, 386, 910, 750), fill=255)
        alpha = ImageChops.lighter(alpha, protected)

    rgba = rgb.convert("RGBA")
    rgba.putalpha(alpha)
    return rgba


def clean_existing_alpha(image: Image.Image) -> Image.Image:
    """Keep official RGBA pixels and remove only imperceptible alpha noise."""

    rgba = image.convert("RGBA")
    alpha = rgba.getchannel("A").point(lambda value: 0 if value < 4 else value)
    rgba.putalpha(alpha)
    return rgba


def trim_transparent_canvas(image: Image.Image, padding: int) -> Image.Image:
    alpha = image.getchannel("A")
    visible = alpha.point(lambda value: 255 if value >= 6 else 0)
    bbox = visible.getbbox()

    if bbox is None:
        raise ValueError("Logo processing produced an empty image")

    left, top, right, bottom = bbox
    crop_box = (
        max(0, left - padding),
        max(0, top - padding),
        min(image.width, right + padding),
        min(image.height, bottom + padding),
    )
    return image.crop(crop_box)


def process_logo(config: LogoSource) -> tuple[Path, tuple[int, int]]:
    with Image.open(config.source) as source:
        if config.matte_low is None or config.matte_high is None:
            prepared = clean_existing_alpha(source)
        else:
            prepared = remove_light_matte(
                source,
                low=config.matte_low,
                high=config.matte_high,
                protect_alltech_disc=config.protect_alltech_disc,
            )

    prepared = trim_transparent_canvas(prepared, config.padding)
    output = OUTPUT_DIR / config.output_name
    prepared.save(output, format="PNG", optimize=True)
    return output, prepared.size


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    for config in LOGOS:
        output, size = process_logo(config)
        print(f"{output.relative_to(ROOT)}: {size[0]}x{size[1]} RGBA")


if __name__ == "__main__":
    main()
