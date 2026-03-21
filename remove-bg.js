const { Jimp } = require('jimp');

async function removeBg() {
    const img = await Jimp.read('./logo.png');
    const w = img.bitmap.width;
    const h = img.bitmap.height;

    // Cor do fundo detectada no canto
    const bgPixel = img.getPixelColor(5, 5);
    const r0 = (bgPixel >>> 24) & 0xff;
    const g0 = (bgPixel >>> 16) & 0xff;
    const b0 = (bgPixel >>> 8)  & 0xff;
    console.log(`Fundo: rgb(${r0}, ${g0}, ${b0})`);

    const tolerance = 35;
    const visited = new Uint8Array(w * h);

    function isBg(x, y) {
        const px = img.getPixelColor(x, y);
        const r = (px >>> 24) & 0xff;
        const g = (px >>> 16) & 0xff;
        const b = (px >>> 8)  & 0xff;
        return Math.abs(r - r0) < tolerance &&
               Math.abs(g - g0) < tolerance &&
               Math.abs(b - b0) < tolerance;
    }

    // Flood fill iterativo a partir das bordas
    const queue = [];

    for (let x = 0; x < w; x++) {
        if (isBg(x, 0))     queue.push(x + 0 * w);
        if (isBg(x, h - 1)) queue.push(x + (h-1) * w);
    }
    for (let y = 0; y < h; y++) {
        if (isBg(0, y))     queue.push(0 + y * w);
        if (isBg(w - 1, y)) queue.push((w-1) + y * w);
    }

    while (queue.length > 0) {
        const idx = queue.pop();
        if (visited[idx]) continue;
        visited[idx] = 1;

        const x = idx % w;
        const y = Math.floor(idx / w);

        img.setPixelColor(0x00000000, x, y);

        const neighbors = [
            [x-1, y], [x+1, y], [x, y-1], [x, y+1]
        ];
        for (const [nx, ny] of neighbors) {
            if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
                const ni = nx + ny * w;
                if (!visited[ni] && isBg(nx, ny)) {
                    queue.push(ni);
                }
            }
        }
    }

    await img.write('./logo-transparente.png');
    console.log('✅ logo-transparente.png salvo!');
}

removeBg().catch(console.error);
