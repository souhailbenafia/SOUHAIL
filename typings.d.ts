interface SanityBody    {
    _createAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}
interface Image {
    _type:"image";
    asset:{
        _ref: string;
        _type: "reference"
    }
}

export interface Social extends SanityBody{
    _type:"social";
    title: string;
    url: string;
}

export interface PageInfo extends SanityBody{
    _type:"pageInfo"
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNum: string;
    ProfileImage:string;  
}

export interface Technology extends SanityBody{
    _type:"skill";
    title: string;
    image: Image;
    progress: number
}

export interface Skill extends SanityBody{
    _type:"skill";
    title: string;
    image: Image;
    progress: number
}

export interface Project extends SanityBody{
    title: string;
    _type:"project";
    image: Image;
    linkToBuild: string;
    summary: string;
    technologies: Technology[];
}
export interface Experience extends SanityBody{
    _type: "experience";
    company: string;
    companyImage: Image;
    dateStarted: date;
    dateEnd: date;
    iscurrentlyWorkingHire: boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];

} 