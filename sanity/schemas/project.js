export default {
  name: 'project',
  title: 'project',
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
      name : "summary",
      title:"Summary",
      type:"text",
    }  ,
    {
        name : "technologies",
        title:"Technologies",
        type:"array",
        of:[{type:"reference",to:{type:"skill"}}],
    } ,
    {
      name : "linkToBuild",
      title:"LinkToBuild",
      type:"url",
      
    }
     
    
    

  ],
}
