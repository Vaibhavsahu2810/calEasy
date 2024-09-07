import EventTypeForm from "@/components/EventTypeForm";
import { EventTypeModel } from "@/models/EventType";
import mongoose from "mongoose";

type PageProp = {
    params:{
        id:string,

    };
};

export default async function EditEventType({params}:PageProp){
    await mongoose.connect(process.env.MONGODB_URL as string)
    const eventTypeDoc = EventTypeModel.findOne({_id : params.id});

    return(
        <>
        <EventTypeForm></EventTypeForm>
        </>
    )
}