import { NextResponse } from "next/server";

export function GET(request,{params}){
    const {userid,postid}= params;
    console.log(userid,postid);
    return NextResponse.json(params);
}