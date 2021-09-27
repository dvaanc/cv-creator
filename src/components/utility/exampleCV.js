import emptyAvatar from '../../icons/emptyAvatar.png';
const exampleCV = {
  general: {
    firstName: 'John',
    lastName: 'Smith',
    city: 'Sydney',
    phone: '0405321583',
    email: 'JohnSmith@gmail.com',
    photo: emptyAvatar,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius at nulla sed pretium. Nunc semper interdum lorem, id efficitur est. Pellentesque semper sed augue sed euismod. Maecenas dapibus efficitur purus at tincidunt. Pellentesque consequat venenatis velit, eu commodo dolor mollis vel. Donec mollis iaculis dui.',
  },
  education: [
    {
      institution: 'University of Melbourne',
      city: 'Melbourne',
      qualification: 'Masters of Computer Science',
      startDate: '2006',
      endDate: '2011',
    },
    {
      institution: 'Melbourne High School',
      city: 'Melbourne',
      qualification: 'VCE',
      startDate: '2000',
      endDate: '2005',
    },
  ],
  work: [
    {
      position: 'Junior Full Stack Developer',
      company: 'Media Ocean',
      city: 'Melbourne',
      startDate: '2012',
      endDate: '2013',
    },
    {
      position: 'Full Stack Developer',
      company: 'Media Ocean',
      city: 'Melbourne',
      startDate: '2013',
      endDate: '2015',
    },
    {
      position: 'Senior Software Engineer',
      company: 'Google',
      city: 'Sydney',
      startDate: '2016',
      endDate: 'Present',
    },
  ],

  
}

export default exampleCV;