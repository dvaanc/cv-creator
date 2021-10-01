import emptyAvatar from '../../icons/emptyAvatar.png';
const exampleCV = {
  general: {
    firstName: 'John',
    lastName: 'Smith',
    occupation: 'Senior Software Engineer',
    city: 'Sydney',
    phone: '0405 321 583',
    email: 'JohnSmith@gmail.com',
    photoName: 'emptyAvatar.png',
    photoSrc: emptyAvatar,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius at nulla sed pretium. Nunc semper interdum lorem, id efficitur est. Pellentesque semper sed augue sed euismod. Maecenas dapibus efficitur purus at tincidunt. Pellentesque consequat venenatis velit, eu commodo dolor mollis vel. Donec mollis iaculis dui.',
  },
  education: [
    {
      institution: 'University of Melbourne',
      city: 'Melbourne',
      qualification: 'Masters of Computer Science',
      startDate: '2006-01',
      endDate: '2011-01',
    },
    {
      institution: 'Melbourne High School',
      city: 'Melbourne',
      qualification: 'VCE',
      startDate: '2000-01',
      endDate: '2005-01',
    },
  ],
  work: [
    {
      position: 'Junior Full Stack Developer',
      company: 'Media Ocean',
      city: 'Melbourne',
      startDate: '2012-01',
      endDate: '2013-01',
    },
    {
      position: 'Full Stack Developer',
      company: 'Media Ocean',
      city: 'Melbourne',
      startDate: '2013-01',
      endDate: '2015-01',
    },
    {
      position: 'Senior Software Engineer',
      company: 'Google',
      city: 'Sydney',
      startDate: '2016-01',
      endDate: '2018-01',
    },
  ],

  
}

export default exampleCV;