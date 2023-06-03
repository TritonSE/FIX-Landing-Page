import { base } from '$app/paths';
import type { CatData } from './types';

import shadow from './img/shadow.png?format=avif';
import shadow_mobile from './img/shadow_mobile.png?format=avif';
import close_up from './img/close_up_full.png?format=avif';
import close_up_mobile from './img/close_up_mobile.png?format=avif';
import almira from './img/almira_full.png?format=avif';
import almira_mobile from './img/almira_mobile.png?format=avif';

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
    image_path: shadow,
    mobile_image_path: shadow_mobile,
  },
  {
    name: 'Close Up',
    desc: 'Nice to meet you! I’m your well-known resident of Hollywood Forever. You can find me sunning on gravestones. The owners of my iconic cemetery came to FixNation years ago and asked them to spay and neuter all the community cats living on the grounds. Pretty cool right? FixNation still provides these services. ',
    abbrev_len: 1412,
    ig_link: 'https://www.instagram.com/closeupthecemeterycat/?hl=en',
    ig_username: 'closeupthecemeterycat',
    n_followers: 9873,
    image_path: close_up,
    mobile_image_path: close_up_mobile,
  },
  {
    name: 'Almira',
    desc: 'I’m one of the cats at Jay Leno’s famous garage in the San Fernando Valley which is just a stone’s throw from our clinic. FixNation has sterilized a number of the Disneyland Cats living within the famous theme park and resort. We’ve all been TNR’d and are now looked after by their own team of caregivers.',
    abbrev_len: 135,
    ig_link: 'https://www.instagram.com/disneylandcats/?hl=en',
    ig_username: 'disneylandcats',
    n_followers: 110000,
    image_path: almira,
    mobile_image_path: almira_mobile,
  }
];
