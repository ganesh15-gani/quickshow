export const dateFormat = (date) => {
    return new Date(date).toLocaleString('en-US', {
       weekdat: 'short',
       month: 'long',
       day:'numeric',
       hour:'numeric',
       minute:'numeric' 
    })
}