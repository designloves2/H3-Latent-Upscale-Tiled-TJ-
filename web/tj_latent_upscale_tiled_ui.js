// Based on ComfyUI-Kimchy-Minimax-H3-Suite, Copyright 2026 Kimchy, licensed under the Apache License 2.0
// (https://github.com/AI-KIMCHY/ComfyUI-Kimchy-Minimax-H3-Suite).
// Modified by designloves2 (2026-11): node, class, module and category names changed so this pack can sit next to the
// original one.
// See NOTICE and LICENSE.
import { app } from "../../scripts/app.js";

app.registerExtension({
    name: "TJ.H3LatentUpscaleTiled.AutoToggle",
    async nodeCreated(node) {
        if (node.comfyClass !== "TJLatentUpscaleTiledMP") return;

        const modeWidget = node.widgets?.find((w) => w.name === "upscale_by");
        const mpWidget = node.widgets?.find((w) => w.name === "target_megapixels");
        const scaleWidget = node.widgets?.find((w) => w.name === "scale");

        if (!modeWidget || !mpWidget || !scaleWidget) return;

        const toggleWidget = (widget, show) => {
            if (!widget._origType) {
                widget._origType = widget.type;
                widget._origComputeSize = widget.computeSize;
            }
            widget.type = show ? widget._origType : "converted-widget";
            widget.computeSize = show ? widget._origComputeSize : () => [0, -4];
            widget.disabled = !show;
        };

        const updateVisibility = () => {
            const isMP = modeWidget.value === "megapixels";
            toggleWidget(mpWidget, isMP);
            toggleWidget(scaleWidget, !isMP);
            node.setSize([node.size[0], node.computeSize()[1]]);
            app.graph.setDirtyCanvas(true, true);
        };

        const origCallback = modeWidget.callback;
        modeWidget.callback = function (...args) {
            if (origCallback) origCallback.apply(this, args);
            updateVisibility();
        };

        setTimeout(updateVisibility, 50);
    },
});
