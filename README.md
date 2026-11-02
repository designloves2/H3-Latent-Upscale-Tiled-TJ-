# H3 Latent Upscale Tiled (TJ)

3D latent upscaler for MiniMax H3 (1 MP up to 4K) plus a dual scheduler, built to run on a 16 GB VRAM card.

This is a modified copy of [ComfyUI-Kimchy-Minimax-H3-Suite](https://github.com/AI-KIMCHY/ComfyUI-Kimchy-Minimax-H3-Suite)
by Kimchy (Copyright 2026 Kimchy, Apache License 2.0). Credit for the upscaler design and trained weights logic goes to the original author.

## What changed
- **Fix:** above about 2.5 MP (latent area over 10000) the input is kept on the CPU on purpose to save VRAM, but the window was then run through the GPU network as a CPU tensor and failed with `Expected all tensors to be on the same device, but got mat1 is on cpu`. The window is now computed on the model's device. Memory behaviour is unchanged (accumulation buffers stay on the CPU, one window on the GPU).
- **Renamed** so it can be installed next to the original pack:

| Original | This pack | Display name |
|---|---|---|
| `KimchyH3ZeroSplitMP` | `TJLatentUpscaleTiledMP` | H3 Latent Upscale Tiled (TJ) |
| `KimchyH3ZeroSplitV2` | `TJLatentUpscaleTiledV2` | H3 Latent Upscale Tiled V2 (TJ) |
| `KimchyH3DualScheduler` | `TJH3DualScheduler` | H3 Dual Scheduler (TJ) |

See `NOTICE` for the full list of changes.

## Install
```
cd ComfyUI/custom_nodes
git clone https://github.com/designloves2/H3-Latent-Upscale-Tiled-TJ-
```
Restart ComfyUI. Node category: `video/TJ H3 Latent Upscale`.

## License
Apache License 2.0 (see `LICENSE` and `NOTICE`).
