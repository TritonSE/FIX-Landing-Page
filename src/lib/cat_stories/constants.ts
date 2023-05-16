import { base } from '$app/paths';
import type { CatData } from './types';

const n_backgrounds = 4;
let index = 0;
const next = () => {
  index = (index + 1) % n_backgrounds;
  setTimeout(next, 5000);
};
next();
/**
 * Data about each cat to display in the cat stories
 */
export const CAT_DATA: CatData[] = [
  {
    name: 'Shadow',
    desc: 'I’m the queen of the Home Depot in Woodland Hills, where I serve as the store’s resident mouser. I came to FixNation for spay surgery and was returned the next day to my home turf, where I’m back to patrolling the aisles of the garden center and making customers smile. I’ve been told I’m an excellent example of a healthy and thriving working cat.',
    abbrev_len: Infinity,
    ig_link: 'https://www.instagram.com/shadowthehomedepotcat_/?hl=en',
    ig_username: 'shadowthehomedepotcat_',
    n_followers: 295,
    image_path0: `${base}/cat_stories/shadow0.png`,
    image_path1: `${base}/cat_stories/shadow1.png`,
    image_path2: `${base}/cat_stories/shadow2.png`,
    image_path3: `${base}/cat_stories/shadow3.png`,
    mobile_image_path: `${base}/cat_stories/shadow_mobile.png`
  },
  {
    name: 'Close Up',
    desc: 'Nice to meet you! I’m your well-known resident of Hollywood Forever. You can find me sunning on gravestones. The owners of my iconic cemetery came to FixNation years ago and asked them to spay and neuter all the community cats living on the grounds. Pretty cool right? FixNation still provides these services. ',
    abbrev_len: 1412,
    ig_link: 'https://www.instagram.com/closeupthecemeterycat/?hl=en',
    ig_username: 'closeupthecemeterycat',
    n_followers: 9873,
    image_path0: `${base}/cat_stories/close_up0.png`,
    image_path1: `${base}/cat_stories/close_up1.png`,
    image_path2: `${base}/cat_stories/close_up2.png`,
    image_path3: `${base}/cat_stories/close_up3.png`,
    mobile_image_path: `${base}/cat_stories/close_up_mobile.png`
  },
  {
    name: 'Almira',
    desc: 'I’m one of the cats at Jay Leno’s famous garage in the San Fernando Valley which is just a stone’s throw from our clinic. FixNation has sterilized a number of the Disneyland Cats living within the famous theme park and resort. We’ve all been TNR’d and are now looked after by their own team of caregivers.',
    abbrev_len: 135,
    ig_link: 'https://www.instagram.com/disneylandcats/?hl=en',
    ig_username: 'disneylandcats',
    n_followers: 110000,
    image_path0: `${base}/cat_stories/almira0.png`,
    image_path1: `${base}/cat_stories/almira1.png`,
    image_path2: `${base}/cat_stories/almira2.png`,
    image_path3: `${base}/cat_stories/almira3.png`,
    mobile_image_path: `${base}/cat_stories/almira_mobile.png`
  }
];
