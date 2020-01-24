export const home = (req, res) => res.render("home" , {pageTitle : 'Home'});

export const search = (req,res) => {
    const {query : { term : searchingBy}} = req;
    res.render("search", {pageTitle : 'search', searchingBy})
};

export const videos = (req, res) => res.render("videos", {pageTitle : 'video'});
export const upload = (req, res) => res.render("upload", {pageTitle : 'upload'});
export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle : 'video Detail'});
export const editVideo = (req, res) => res.render("editvideo", {pageTitle : 'edit video'});
export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle : 'delete video'});