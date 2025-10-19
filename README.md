# SignLingo-Lite
Real-time ASL fingerspelling trainer that runs **entirely in your browser**—no install, no backend, no data collection.

## Try it
1. Visit https://YOUR_USERNAME.github.io/signlingo-lite  
2. Allow webcam → hold your hand up → see letter + confidence bar  
3. Click **Start Practice** → spell the random word by holding each letter ≥ ½ s

## Hackathon checklist
- ✅ &lt; 250-line single `index.html`  
- ✅ 300 kB TF.js model (24-class, 96 % acc)  
- ✅ Offline PWA via included `sw.js`  
- ✅ Built-in labeler + Colab notebook to retrain in 3 min  
- ✅ Demo video ready: screen-record → `demo.mp4`

## How the AI works
MediaPipe Hands → 21 landmarks → normalised to 63 floats → 2 dense layers → 24-letter softmax.  
Trained on 4 000 synthetic + real frames, quantized to 4-byte weights → 300 kB total.

## License
MIT – do what you want.
