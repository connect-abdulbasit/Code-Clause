const blogsSection = document.querySelector(".blogs-section");
const btn = document.querySelector(".btn");
const Blog = document.querySelector(".AddBlog");
const submit = document.querySelector(".submit");
const input = document.querySelectorAll("input");
const close = document.querySelector(".close div");
const image = document.querySelector("#Image");
const EditAndDeleteOption = document.querySelectorAll(".icon");
let open = false;
let select;
const blogs = [
  {
    id: 1,
    title: "How to build a responsive blog platform",
    image: "https://i.ytimg.com/vi/dgfHwfC6bWE/sddefault.jpg",
    categories: ["Web Development", "HTML", "CSS", "JavaScript"],
    link: "https://www.wix.com/studio/blog/how-to-make-a-responsive-website",
  },
  {
    id: 2,
    title: "The importance of responsive design in web development",
    image:
      "https://www.velocityconsultancy.com/wp-content/uploads/2021/12/Importance-of-Responsive-Website-Design.jpg",
    categories: ["Web Development", "Responsive Design", "UX"],
  },
  {
    id: 3,
    title: "How to optimize images for web",
    image:
      "https://master-to-develop.stage.dreamhost.com/blog/wp-content/uploads/2022/07/optimize-images-for-web-social.jpeg",
    categories: ["Web Development", "Images", "Optimization"],
  },
  {
    id: 4,
    title: "How to build a responsive Portfolio Website",
    image:
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/331680841/original/53c41432d55948987161e4887c85f542fb98b999/create-a-responsive-personal-portfolio-website-business-website-or-blog-website.png",
    categories: ["HTML", "CSS", "JavaScript"],
  },
];

const createBlogCard = (blog) => {
  const blogCard = document.createElement("div");
  blogCard.classList.add("blog-card");

  const blogImage = document.createElement("img");
  blogImage.src = blog.image;
  blogImage.alt = blog.title;
  blogImage.classList.add("blog-image");
  const des = document.createElement("div");
  des.classList.add("blog-des");
  const blogTitle = document.createElement("h2");
  blogTitle.classList.add("blog-title");
  blogTitle.textContent = blog.title;
  des.appendChild(blogTitle);
  const options = document.createElement("div");
  options.innerHTML =
    '<i class="fa fa-ellipsis-v icon" style="font-size:24px"></i>';
  const blogCategories = document.createElement("div");
  blogCategories.classList.add("blog-categories");
  const container = document.createElement("div");
  container.classList.add("container");
  container.innerHTML = `<ul> <li>Edit</li> <li>Delete</li> </ul>`;
  options.appendChild(container);
  des.appendChild(options);
  blog.categories.forEach((category) => {
    const blogCategory = document.createElement("span");
    blogCategory.textContent = category;
    blogCategory.classList.add("blog-category");
    blogCategories.appendChild(blogCategory);
  });

  blogCard.appendChild(blogImage);
  blogCard.appendChild(des);
  blogCard.appendChild(blogCategories);

  blogsSection.appendChild(blogCard);
};
// document.addEventListener("click", function (event) {
//   const contain = document.querySelectorAll(".container");
//   contain.forEach((e) => {
//     if (open) {
//       e.style.right = "-12%";
//       open = false;
//     }
//   });
// });
const eventListner = () => {
  let EditAndDeleteOption = document.querySelectorAll(".icon");
  EditAndDeleteOption.forEach((e) => {
    e.addEventListener("click", () => {
      e.nextSibling.style.right = "2%";
      open = true;
      select = e.nextSibling;
    });
  });
  EditAndDeleteOption.forEach((e) => {
    // console.log(e.nextSibling.children[0].children[1]);
    // console.log(e.parentElement.parentElement.parentElement);
    e.nextSibling.children[0].children[1].addEventListener("click", () => {
      e.parentElement.parentElement.parentElement.parentElement.removeChild(
        e.parentElement.parentElement.parentElement
      );
    });
    // e.nextSibling.children[0].children[0].addEventListener("click", () => {
    //   formOpen();
    //   input[0].value = ;
    // });
  });
};
blogs.forEach((blog) => {
  createBlogCard(blog);
  eventListner();
});
const formOpen = () => {
  Blog.style.left = "50%";
  Blog.style.top = "50%";
  Blog.style.transform = "translate(-50%, -50%)";
};
btn.addEventListener("click", () => {
  formOpen();
});
submit.addEventListener("click", () => {
  let add = true;
  input.forEach((i) => {
    if (i.value == "") {
      add = false;
      i.style.border = "1px solid red";
    }
  });
  if (add) {
    const newblog = {
      id: blogs.length + 1,
      title: input[0].value,
      categories: input[1].value.split(","),
      image: imageURL,
    };
    blogs.push(newblog);
    createBlogCard(newblog);
    Blog.style.left = "-100%";
  }
  eventListner();
});
let imageURL = "";
let convertToURL = () => {
  const file = image.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      imageURL = e.target.result;
      console.log("Image URL:", imageURL);
    };

    reader.readAsDataURL(file);
  }
};
input.forEach((i) => {
  i.addEventListener("input", () => {
    if (i.value != "") {
      i.style.border = "none";
    } else {
      i.style.border = "1px solid red";
    }
  });
});
close.addEventListener("click", () => {
  Blog.style.left = "-100%";
});
image.addEventListener("change", () => {
  convertToURL();
});
