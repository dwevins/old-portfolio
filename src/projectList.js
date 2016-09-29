'use strict'

export default function ProjectList() {
  return [
      {
        name: 'Run Recorder',
        url: 'http://run-recorder.surge.sh',
        github: 'https://github.com/dwevins/19-run-timer',
        thumb: 'assets/images/run-thumb.jpg',
        image: 'assets/images/run-screen.jpg',
        description: `Run Recorder allows users to keep a record of runs they have taken. Users are able to view a list of runs, and add, review, or edit existing runs.

        Built with Ember.`
      },
      {
        name: 'Booze Clues',
        url: 'http://booze-clues.surge.sh',
        github: 'https://github.com/boozeclues',
        thumb: 'assets/images/booze-thumb.jpg',
        image: 'assets/images/booze-screen.jpg',
        description: `Booze Clues allows users to browse a list of alcoholic drinks and view each drink's recipe. Users can search for drinks by name, or use the Cabinet feature to search for drinks that can be made with a specified list of ingredients. Registered users can also save their favorite drinks.

        Co-developed with James Ridley.
        Built with Ember and AdonisJS.`
      },
      {
        name: 'Puppy Adoption',
        url: 'http://puppy-adoption.surge.sh',
        github: 'https://github.com/dwevins/15-puppy-adoption',
        thumb: 'assets/images/puppy-thumb.jpg',
        image: 'assets/images/puppy-screen.jpg',
        description: `Puppy Adoption allows users to add, update, and close adoption listings for puppies.

        Built with HTML, JavaScript, and CSS.`
      }
    ];
}
