import axios from "axios";

const API_KEY = import.meta.env.PIC_WISH_API_KEY;
const base_url = "https://techhk.aoscdn.com";


const enhancedImageHandler = async (file) => {
    try{
        const taskID = await uploadImage(file);
        // check if taskID is valid
        if (!taskID) {
            throw new Error("Failed to upload image");
        } else{
            console.log("Image uploaded successfully, task ID:", taskID);
        }
        // wait for the image to be processed
        const response = await fetchImage(taskID);
        console.log("Image fetched successfully, response:", response);
    } catch (error) {
        console.error("Error enhancing image:", error);
    }
};

const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image_file", file);
    const data = await axios.post(`${base_url}/api/tasks/visual/scale`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            "X-API-KEY": API_KEY,
        }
    })
    console.log("Image upload response:", data);
    // code to upload image..
    // "/api/tasks/visual/scale"
}

const fetchImage = async (taskID) => {
    // fetch enhanced image from server..
    // "/api/tasks/visual/scale/{task_id}"
}

export default enhancedImageHandler;