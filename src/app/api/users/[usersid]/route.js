import { NextResponse } from "next/server";

export function DELETE(request,{params}){
    console.log(params);
    const {usersid} = params;
    console.log(usersid);
    console.log("delete api called");
    return NextResponse.json({
        message: "deleted",
        status: true,
        });
    
}