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
export function POST(){}
export function DELETE(request){
    console.log("delete api called");
    return NextResponse.json({
        message: "deleted",
        status: true,
        });
    
}
export function PUT(){}