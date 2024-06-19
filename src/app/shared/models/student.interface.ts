export interface Istd{
    fname: string;
    lname: string;
    email: string;
    contact : number;
}

export interface Ipost{
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface Ituc{
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface Itab{
    skillName: string;
    content: string;
}
export interface Istr{
    fname: string;
    lname: string;
    email: string;
    contact: string;
}
export interface IcontasctArr{
    moc: string;
    id: number;
}

export interface Ipatchvalue{
    answer: string;
    contact: string;
    email: string;
    mocontact: string;
    sectreatquestion: string;
    username: string;
    subscribed: boolean;
}