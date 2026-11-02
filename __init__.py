# Based on ComfyUI-Kimchy-Minimax-H3-Suite, Copyright 2026 Kimchy, licensed under the Apache License 2.0
# (https://github.com/AI-KIMCHY/ComfyUI-Kimchy-Minimax-H3-Suite).
# Modified by designloves2 (2026-11): node, class, module and category names changed so this pack can sit next to the
# original one.
# See NOTICE and LICENSE.
from .tj_latent_upscale_tiled_v2 import TJLatentUpscaleTiledV2
from .tj_latent_upscale_tiled_mp import TJLatentUpscaleTiledMP
from .tj_h3_dual_scheduler import TJH3DualScheduler

NODE_CLASS_MAPPINGS = {
    "TJLatentUpscaleTiledV2": TJLatentUpscaleTiledV2,
    "TJLatentUpscaleTiledMP": TJLatentUpscaleTiledMP,
    "TJH3DualScheduler": TJH3DualScheduler,
}

NODE_DISPLAY_NAME_MAPPINGS = {
    "TJLatentUpscaleTiledV2": "H3 Latent Upscale Tiled V2 (TJ)",
    "TJLatentUpscaleTiledMP": "H3 Latent Upscale Tiled (TJ)",
    "TJH3DualScheduler": "H3 Dual Scheduler (TJ)",
}

WEB_DIRECTORY = "./web"

__all__ = ["NODE_CLASS_MAPPINGS", "NODE_DISPLAY_NAME_MAPPINGS", "WEB_DIRECTORY"]
