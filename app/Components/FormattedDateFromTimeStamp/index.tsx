import { extractTimestamp, formatDateFromFirebaseTimestamp } from "@/app/utils/commonFunctions"

const FormattedDateFromTimeStamp = ({ timeStamp }: any) => {
    return (
        <>
            {
                (timeStamp) ? (
                    <>
                        {formatDateFromFirebaseTimestamp((timeStamp), "full")}
                    </>
                ) : (
                    "N/A"
                )
            }
        </>
    )
}
export default FormattedDateFromTimeStamp;