import { API_TOKEN_KEY, API_URL } from "./constant";

export async function submitQuery(mail, text) {
    const res = await fetch(API_URL + "submit.php", {
        method: "POST",
        headers: JSON.stringify({ "Api-Key": API_TOKEN_KEY, "Website": "aruco.in", "Form-Name": "Contact-Me" }),
        body: JSON.stringify({
            email: mail,
            message: text
        })
    });
    if (res.status !== 200) throw await res.json();
    return await res.json();
}
