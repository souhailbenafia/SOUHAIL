export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name : "jobTitle",
    title:"JobTitle",
      type:"string",
    }  ,
    {
      name : "role",
      title:"Role",
      type:"string",
    } ,
    {
      name : "companyImage",
      title:"CompanyImage",
      type:"image",
      Option:{
        hotspot: true,
      }
    } , 
    {
      name :"company",
      title:"Company",
      type:"string",
    }  ,
    {
      name :"dateStarted",
      title:"DateStarted",
      type:"date",
    },
    {
      name :"dateEnded",
      title:"dateEnded",
      type:"date",
    } ,
    {
      name :"isCurrentlyWorkHere",
      title:"IsCurrentlyWorkHere",
      type:"boolean",
    } ,
    {
        name :"technologies",
        title:"Technologies",
        type:"array",
        of:[{type:"reference",to:{type:"skill"}}],
    } ,
    {
      name :"points",
      title:"Points",
      type:"array",
      of:[ {type:"string"}],
    }
     
    
    

  ],
}
