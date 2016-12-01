const getAppSettings = state => {
  const url = window.location.href
  const registrationLink = url + '#/register/' + state.user.tennant
  return [
    {
      id:0,
      name: 'Copy Registration Link',
      handleClick: e => {
        const success = copy(registrationLink)
        if (success) alert('Link copied!')
        else alert('Error copying link')
      },
      type: 'button'
    },
    {
      id:1,
      name:'Get Equipment Template',
      handleClick: e => {
        window.location = "/GearGoober Equipment Template.xlsx"
      },
      type: 'button'
    },
    {
      id:2,
      name:'Upload Equipment',
      handleClick: e => {
        
      },
      type: 'button'
    },
    {
      id:100,
      name: 'This setting',
      value: true,
      type: 'toggle'
    },
    {
      id:101,
      name: 'That setting',
      value: false,
      type: 'toggle'
    }
  ]
}

export default getAppSettings
