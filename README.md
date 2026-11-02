# H3 Latent Upscale Tiled (TJ)

3D latent upscaler for MiniMax H3 (1 MP up to 4K) and a dual scheduler, made to run on a **16 GB VRAM** card.

## Original author / Credit

**This pack is a modified copy of [ComfyUI-Kimchy-Minimax-H3-Suite](https://github.com/AI-KIMCHY/ComfyUI-Kimchy-Minimax-H3-Suite) by Kimchy (AI-KIMCHY).**
The upscaler design, network code and node logic are the original author's work.

- Original project: https://github.com/AI-KIMCHY/ComfyUI-Kimchy-Minimax-H3-Suite
- Original copyright: Copyright 2026 Kimchy
- License: [Apache License 2.0](LICENSE), unchanged. See [NOTICE](NOTICE) for the list of modifications.
- Every modified source file carries a "Based on ... / Modified by" header.
- This project is not affiliated with or endorsed by the original author. Please support the original project.

## What I changed (designloves2)
1. **Bug fix:** above about 2.5 MP (latent area over 10000) the input is kept on the CPU on purpose to save VRAM, but the window was then run through the GPU network as a CPU tensor and failed with `Expected all tensors to be on the same device, but got mat1 is on cpu`. The window is now computed on the model's device. Memory behaviour is unchanged: the accumulation buffers stay on the CPU and only one window is on the GPU at a time.
2. **Renamed** nodes, classes, modules, categories and the web extension so this pack and the original can be installed side by side:

| Original | This pack | Display name |
|---|---|---|
| `KimchyH3ZeroSplitMP` | `TJLatentUpscaleTiledMP` | H3 Latent Upscale Tiled (TJ) |
| `KimchyH3ZeroSplitV2` | `TJLatentUpscaleV2` | H3 Latent Upscale V2 (TJ) |
| `KimchyH3DualScheduler` | `TJH3DualScheduler` | H3 Dual Scheduler (TJ) |

`TJLatentUpscaleTiledMP` works in windows over time with CPU accumulation (the part that lets it reach 4K on 16 GB). `TJLatentUpscaleV2` keeps everything on the GPU in 33-frame windows and is not tiled.

## Install
```
cd ComfyUI/custom_nodes
git clone https://github.com/designloves2/H3-Latent-Upscale-Tiled-TJ-
```
Restart ComfyUI. Node category: `video/TJ H3 Latent Upscale`.

## License
Apache License 2.0, see [LICENSE](LICENSE) and [NOTICE](NOTICE).
