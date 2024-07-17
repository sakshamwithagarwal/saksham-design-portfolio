export const getAge = () => {
    const dob = new Date(2002, 5, 15);

    const diff_ms = Date.now() - dob.getTime()

    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
}