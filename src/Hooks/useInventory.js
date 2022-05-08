import { useEffect, useState } from "react"

const useReview = () => {
    const [review, setReview] = useState([])
    useEffect(() => {

        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])


    return [review, setReview]
}
export default useReview