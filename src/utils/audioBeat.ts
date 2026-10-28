/**
 * Web Audio API synthesizer for authentic Maharashtrian Dhol and Tasha beats
 * Generates resonant dhol bass ("धुम" / "धा") and sharp metallic tasha snap ("ता" / "कडकडाट")
 * Completely self-contained, no external mp3 files required!
 */

class DholTashaSoundEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private timerId: number | null = null;
  private currentBeat = 0;
  private tempo = 124; // Energetic festival tempo

  private initCtx() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  /**
   * Deep Bass Dhol Beat ("धुम" / Dhum)
   */
  public playDholBass(time?: number) {
    this.initCtx();
    if (!this.ctx) return;
    const now = time ?? this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    // Frequency pitch drop: starts with punch (140Hz) and drops to resonant dhol thud (50Hz)
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(45, now + 0.35);

    gain.gain.setValueAtTime(0.9, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.52);
  }

  /**
   * Rim/Slap Dhol Beat ("ता" / Ta)
   */
  public playDholSlap(time?: number) {
    this.initCtx();
    if (!this.ctx) return;
    const now = time ?? this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(280, now);
    osc.frequency.exponentialRampToValueAtTime(110, now + 0.18);

    gain.gain.setValueAtTime(0.65, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.25);
  }

  /**
   * Sharp metallic Tasha Strike ("कडक" / Kadak Snap)
   */
  public playTashaSnap(accent = false, time?: number) {
    this.initCtx();
    if (!this.ctx) return;
    const now = time ?? this.ctx.currentTime;

    // Filtered noise for rim/skin snap
    const bufferSize = this.ctx.sampleRate * 0.1;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const bandpass = this.ctx.createBiquadFilter();
    bandpass.type = 'bandpass';
    bandpass.frequency.setValueAtTime(accent ? 3200 : 2600, now);
    bandpass.Q.setValueAtTime(3.5, now);

    const gain = this.ctx.createGain();
    const initialVol = accent ? 0.75 : 0.45;
    gain.gain.setValueAtTime(initialVol, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + (accent ? 0.12 : 0.08));

    // Also metallic ring tone
    const osc = this.ctx.createOscillator();
    const oscGain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(accent ? 880 : 740, now);
    oscGain.gain.setValueAtTime(accent ? 0.35 : 0.18, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

    noise.connect(bandpass);
    bandpass.connect(gain);
    gain.connect(this.ctx.destination);

    osc.connect(oscGain);
    oscGain.connect(this.ctx.destination);

    noise.start(now);
    osc.start(now);
    noise.stop(now + 0.15);
    osc.stop(now + 0.16);
  }

  /**
   * Start authentic continuous rhythm loop
   * 8-step rhythm pattern:
   * Beat 0: Dhol Bass + Tasha Accent
   * Beat 1: Tasha rapid
   * Beat 2: Dhol Slap + Tasha
   * Beat 3: Tasha rapid
   * Beat 4: Dhol Bass + Tasha
   * Beat 5: Tasha rapid
   * Beat 6: Dhol Bass + Dhol Slap
   * Beat 7: Tasha triple snap
   */
  public startRhythm(onBeatCallback?: (step: number) => void) {
    if (this.isPlaying) return;
    this.initCtx();
    this.isPlaying = true;
    this.currentBeat = 0;

    const stepIntervalMs = (60 / this.tempo / 2) * 1000; // 16th-note feel

    this.timerId = window.setInterval(() => {
      const step = this.currentBeat % 8;
      if (onBeatCallback) {
        onBeatCallback(step);
      }

      if (step === 0) {
        this.playDholBass();
        this.playTashaSnap(true);
      } else if (step === 1) {
        this.playTashaSnap(false);
      } else if (step === 2) {
        this.playDholSlap();
        this.playTashaSnap(false);
      } else if (step === 3) {
        this.playTashaSnap(false);
      } else if (step === 4) {
        this.playDholBass();
        this.playTashaSnap(true);
      } else if (step === 5) {
        this.playTashaSnap(false);
      } else if (step === 6) {
        this.playDholBass();
        this.playDholSlap();
      } else if (step === 7) {
        this.playTashaSnap(true);
      }

      this.currentBeat++;
    }, stepIntervalMs);
  }

  public stopRhythm() {
    this.isPlaying = false;
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  public getIsPlaying() {
    return this.isPlaying;
  }
}

export const soundEngine = new DholTashaSoundEngine();
