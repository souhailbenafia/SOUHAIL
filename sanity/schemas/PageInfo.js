export default {
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    {
      name : "name",
      title:"Name",
      type:"string",
    }  ,
    {
      name : "role",
      title:"Role",
      type:"string",
    } ,
    {
      name : "heroImage",
      title:"Image",
      type:"image",
      Option:{
        hotspot: true,
      }
    } , 
    {
      name : "backgroundInformation",
      title:"BackgroundInformation",
      type:"string",
    }  ,
    {
      name : "profileImage",
      title:"ProfileImage",
      type:"image",
      Option:{
        hotspot: true,
      }
    },
    {
      name : "phoneNum",
      title:"PhoneNum",
      type:"string",
    },
    {
      name : "email",
      title:"Email",
      type:"string",
    } ,
    {
      name : "address",
      title:"Address",
      type:"string",
    } ,
    {
        name : "socials",
        title:"Socials",
        type:"array",
        of:[{type:"reference",to:{type:"social"}}],
    }
     
    
    

  ],
}
