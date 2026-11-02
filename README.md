# H3 Latent Upscale Tiled (TJ)

[English](#english) | [한국어](#한국어)

---

## 한국어

MiniMax H3용 3D 라텐트 업스케일러(1MP ~ 4K)와 듀얼 스케줄러 노드 팩입니다. **16GB VRAM** 그래픽카드에서 돌아가도록 만들었습니다.

### 원작자 표시 (Original author / Credit)

**이 팩은 Kimchy(AI-KIMCHY)의 [ComfyUI-Kimchy-Minimax-H3-Suite](https://github.com/AI-KIMCHY/ComfyUI-Kimchy-Minimax-H3-Suite)를 수정한 사본입니다.**
업스케일러 설계, 네트워크 코드, 노드 로직은 모두 원작자의 작업입니다.

- 원본 프로젝트: https://github.com/AI-KIMCHY/ComfyUI-Kimchy-Minimax-H3-Suite
- 원본 저작권: Copyright 2026 Kimchy
- 라이선스: [Apache License 2.0](LICENSE) 그대로 유지. 수정 목록은 [NOTICE](NOTICE)에 있습니다.
- 수정한 모든 소스 파일 맨 위에 "Based on ... / Modified by" 표기가 있습니다.
- 이 프로젝트는 원작자와 무관하며 원작자의 보증을 받은 것이 아닙니다. 원본 프로젝트도 응원해 주세요.

### 수정한 내용 (designloves2)
1. **버그 수정:** 약 2.5MP(라텐트 면적 10000 초과)부터는 VRAM 절약을 위해 입력을 일부러 CPU에 둡니다. 그런데 이때 창(window)이 CPU 텐서 상태로 GPU 네트워크에 들어가 `Expected all tensors to be on the same device, but got mat1 is on cpu` 오류가 났습니다. 이제 창 연산을 모델이 있는 장치에서 합니다. 메모리 사용 방식은 그대로입니다(누적 버퍼는 CPU, 한 번에 창 하나만 GPU).
2. **이름 변경:** 원본 팩과 같이 설치해도 겹치지 않도록 노드, 클래스, 모듈, 카테고리, 웹 확장 이름을 바꿨습니다.

| 원본 | 이 팩 | 표시 이름 |
|---|---|---|
| `KimchyH3ZeroSplitMP` | `TJLatentUpscaleTiledMP` | H3 Latent Upscale Tiled (TJ) |
| `KimchyH3ZeroSplitV2` | `TJLatentUpscaleV2` | H3 Latent Upscale V2 (TJ) |
| `KimchyH3DualScheduler` | `TJH3DualScheduler` | H3 Dual Scheduler (TJ) |

`TJLatentUpscaleTiledMP`는 시간 방향 창으로 나누고 CPU에 누적하는 방식이라 16GB에서 4K까지 갑니다. `TJLatentUpscaleV2`는 33프레임 창으로 전부 GPU에서 처리하며 타일 방식이 아닙니다.

### 설치
```
cd ComfyUI/custom_nodes
git clone https://github.com/designloves2/H3-Latent-Upscale-Tiled-TJ-
```
ComfyUI를 재시작하세요. 노드 카테고리: `video/TJ H3 Latent Upscale`.

### 라이선스
Apache License 2.0 — [LICENSE](LICENSE), [NOTICE](NOTICE) 참고.

---

<a id="english"></a>
## English

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
