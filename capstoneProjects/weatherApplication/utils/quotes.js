const quotes = [
  "Every storm whispers secrets of resilience.",
  "After every tempest, nature paints a canvas of hope.",
  "In the heart of winter, the promise of spring lies in wait.",
  "Even the darkest night yields to the gentle embrace of dawn.",
  "Laughter, a sunbeam that pierces the clouds of gloom.",
  "Carry your radiance wherever you roam, a beacon in life's shadows.",
  "Rainfall, nature's joyful tears, adorning the earth in celebration.",
  "Within every tempest, serenity finds its refuge.",
  "Life's melody dances in the rhythm of raindrops.",
  "Some find solace in the rain's embrace, while others simply revel in its song.",
  "Sunshine, nature's elixir, imbuing life with warmth and vitality.",
  "Through storms, roots deepen, anchoring life's journey.",
  "The heavens, an artist's palette, painting dreams in hues of azure.",
  "When skies weep, seek solace in the promise of celestial wonders."
];

function getQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

export { getQuote };
