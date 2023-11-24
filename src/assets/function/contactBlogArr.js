import BlogData from '../jsonData/blog.json'
export default function contactBlogArr() {
    let newArr = []
    BlogData.data.map((kitem, kindex) => {
        newArr.push(kitem)
    })
    return newArr
}