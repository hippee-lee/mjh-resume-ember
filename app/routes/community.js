import Route from '@ember/routing/route';

export default class CommunityRoute extends Route {
  model() {
    return [
      {
        title: 'Westlake VillageJS Group',
        task: 'setup in person meetup group for developers',
        role: 'Organizer',
      },
      {
        title: 'Westlake VillageJS Group',
        task: 'recruited Speakers.',
        role: 'Organizer',
      },
      {
        title: 'Westlake VillageJS Group',
        task: 'created agendas and make speaker introductions.',
        role: 'Toastmaster',
      },
      {
        title: 'Westlake VillageJS Group',
        task: 'coordinated venue arrangements.',
        role: 'Organizer',
      },
      {
        title: 'Westlake VillageJS Group',
        task: 'publicize and market speakers and meetings.',
        role: 'Organizer',
      },
      {
        title: 'Westlake VillageJS Group',
        task: 'solicit funding and sponsorship for refreshments and venue.',
        role: 'Organizer',
      },
      {
        title: 'Westlake VillageJS Group',
        task: 'filled in as speaker as needed.',
        role: 'Speaker',
      },
    ];
  }
}

// import Route from '@ember/routing/route';

// export default class ScientistsRoute extends Route {
//   model() {
//     return ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];
//   }
// }
