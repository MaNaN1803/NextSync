import next from "next";
import { NextURL } from "next/dist/server/web/next-url";
import { NextResponse } from "next/server";

export function GET(request){
    const users = [
        {id: 1, name: 'John', age: 30},
        {id: 2, name: 'Mike', age: 20},
        {id: 3, name: 'Jane', age: 25}
        ];
    return NextResponse.json({users},{
        message : "get request send"
    });
}
export async function POST(request){
    const body = request.body;
    console.log(body);
    console.log(request.method);
    // console.log(request.cookies);
    // console.log(request.headers);
    // console.log(request.nextUrl.pathname);
    
    const jsondata = await request.json()
    console.log(jsondata);
    
    return NextResponse.json({
        message : "post request send"
    });
}
export function DELETE(request){
    console.log("delete api called");
    return NextResponse.json({
        message: "deleted",
        status: true,
        });
    
}
export function PUT(){}