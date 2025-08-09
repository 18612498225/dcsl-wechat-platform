import BrandStory from '../views/H5View/BrandStory.vue';
import TalentRecruitment from '../views/H5View/TalentRecruitment.vue';

const routes = [
  {
    path: '/brand-story',
    name: 'BrandStory',
    component: BrandStory,
  },
  {
    path: '/recruitment',
    name: 'TalentRecruitment',
    component: TalentRecruitment,
  },
];

export default routes;
