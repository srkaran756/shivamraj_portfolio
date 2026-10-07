/**
 * Curated Photographic Works by Shivamraj Karan
 * All photographs taken in Bihar, India.
 */
const GALLERY_PLATES = [
  {
    id: "plate-01",
    title: "Morning Chronicle",
    subtitle: "An elder engrossed in his morning paper",
    category: "portraits",
    categoryLabel: "Portraits",
    image: "images/plate_elder_newspaper.jpg",
    aspect: "landscape",
    story: "Caught in total concentration under clean morning light. The silver hair, the sacred tilak, and the quiet grip on the newspaper pages — everything about this frame is absorbed, unhurried, and true."
  },
  {
    id: "plate-02",
    title: "Quiet Absorption",
    subtitle: "A child tucked inside a winter morning",
    category: "portraits",
    categoryLabel: "Portraits",
    image: "images/plate_child_gaze.jpg",
    aspect: "landscape",
    story: "The child's gaze is inward, somewhere between the warmth of the blanket and the light of the screen beside them. A quiet, honest frame of childhood and the present moment coexisting."
  },
  {
    id: "plate-03",
    title: "A Quiet Pause",
    subtitle: "A rickshaw puller resting between rounds",
    category: "street",
    categoryLabel: "Street",
    image: "images/plate_01_rickshaw.jpg",
    aspect: "landscape",
    story: "In between passenger rounds, a cycle-rickshaw puller rests on his seat frame. The weathered tires, the posture of someone who has earned their rest — nothing is staged here."
  },
  {
    id: "plate-04",
    title: "Waiting in Winter",
    subtitle: "Roadside presence on a cold morning",
    category: "street",
    categoryLabel: "Street",
    image: "images/plate_02_winter_bike.jpg",
    aspect: "portrait",
    story: "Swaddled against the morning cold, resting quietly on the handlebar. The winter fog diffuses everything except the subject's patient, unwavering expression."
  },
  {
    id: "plate-05",
    title: "Devotion",
    subtitle: "A direct, unhurried gaze",
    category: "portraits",
    categoryLabel: "Portraits",
    image: "images/plate_05_devotion_portrait.jpg",
    aspect: "portrait",
    story: "An honest, unadorned gaze into the lens. The tilak and silver beard stand out under soft natural light — a portrait of quiet character and lived time."
  },
  {
    id: "plate-06",
    title: "Framed",
    subtitle: "A worker seen through bamboo scaffolding",
    category: "street",
    categoryLabel: "Street",
    image: "images/plate_06_bamboo_perspective.jpg",
    aspect: "square",
    story: "Vertical bamboo poles cut through the frame, creating natural geometry around a contemplative face. The environment becomes the composition."
  },
  {
    id: "plate-07",
    title: "Transit",
    subtitle: "A commuter reading inside a passenger train",
    category: "street",
    categoryLabel: "Street",
    image: "images/plate_04_train_passenger.jpg",
    aspect: "landscape",
    story: "Inside the rhythmic hum of a local passenger train. The metallic divider bars frame a traveler engrossed in reading as shadows shift through the window."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GALLERY_PLATES };
}
