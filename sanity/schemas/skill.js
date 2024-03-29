export default {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name : "title",
      title:"Title",
      description:"Title of the project",
      type:"string",
    }  ,
    {
      name : "image",
      title:"Image",
      type:"image",
      Option:{
        hotspot: true,
      }
    } , 
    {
      name : "progress",
      title:"Progress",
      type:"number",
      description: "Progress of skill from 0 to 100%",
      validation: (Rule)=> Rule.min(0).max(100)
    }  ,
  ],
}
