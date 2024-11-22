import { v4 as uuidv4  } from "uuid"


export interface Task{
    id?:string,
    task:string,
    selectTask:string
}

export enum OptionTaskInterface{
    Todas='Todas',
    Completada='Completada',
    Pendiente='Pendiente',
}