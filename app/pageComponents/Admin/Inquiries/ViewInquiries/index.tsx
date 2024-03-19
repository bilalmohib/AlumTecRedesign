import { db, auth } from "@/firebase";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { formatDate } from "@/app/utils/commonFunctions";
import {
    doc,
    collection,
    onSnapshot,
    addDoc,
    query,
    orderBy,
    deleteDoc,
    setDoc,
    Timestamp,
} from "firebase/firestore";
import { Button } from "@mui/material";
import { InquiriesDataTypes } from "../types";

const ViewInquiries = () => {

    // For GETTING INQUIRIES
    /////////////////////////////////////// Database Part ////////////////////////////////////////////////
    let q = query(collection(db, "ContactUs"));

    const [snapshot, loading, error] = useCollection(q, {
        snapshotListenOptions: { includeMetadataChanges: true },
    });

    const [inquiries, setInquiries] = useState<InquiriesDataTypes[]>([]);

    useEffect(() => {
        if (!loading && snapshot) {
            let localObj: any;

            let arrInquiriesLocal = snapshot?.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));

            localObj = arrInquiriesLocal;

            let arrInquiries: any = localObj;

            setInquiries(arrInquiries);
            console.log("Inquiries ==> ", inquiries);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading, snapshot]);
    // FOR GETTING INQUIRIES

    // Delete Inquiry
    const deleteInquiry = async (id: string) => {
        if (window.confirm("Are you sure you want to delete this Inquiry?")) {
            try {
                await deleteDoc(doc(db, "Blogs", id));
                console.log("Inquiry deleted successfully!");
            } catch (error) {
                console.error("Error deleting inquiry: ", error);
            }
        }
    };

    return (
        <div>
            <h1 className="adminHeadingText text-left">View Inquiries</h1>
            <p className="text-left text-slate-800">
                These are the inquiries from the contact us page of the website.
            </p>

            {inquiries.length > 0 ? (
                <div>
                    {inquiries?.map((inquiry: InquiriesDataTypes) => (
                        <div className="flex justify-between border gap-2 border-slate-200 hover:bg-slate-200 cursor-pointer border-solid rounded-lg px-4 mt-4">
                            <div>
                                <h1 className="text-2xl font-bold text-slate-800">
                                    <b className="text-indigo-600 underline">Company:</b>{" "}
                                    {inquiry?.COMPANY}
                                </h1>
                                <p className="text-md text-slate-800">
                                    <b className="text-gray-700 italic">Name:</b>{" "}
                                    {inquiry?.NAME}
                                </p>
                                <p className="text-md text-slate-800">
                                    <b className="text-purple-500 italic">Email:</b>{" "}
                                    {inquiry?.EMAIL}
                                </p>
                                <p className="text-md text-slate-800">
                                    <b className="text-orange-500 italic">Country:</b>{" "}
                                    {inquiry.COUNTRY.label}
                                </p>
                                <p className="text-md text-slate-800">
                                    <b className="text-blue-500 italic">Message:</b>{" "}
                                    {inquiry?.MESSAGE}
                                </p>
                                <p className="text-md text-slate-800">
                                    <b className="text-slate-700">Time contacted:</b>{" "}
                                    {formatDate(new Date(inquiry?.currentTime))}
                                </p>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <Button
                                    variant="contained"
                                    color="error"
                                    disabled={true}
                                    onClick={() => deleteInquiry(inquiry.id)}
                                >
                                    Delete
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <h3>No Inquiries available</h3>
            )}
        </div>
    );
};
export default ViewInquiries;
