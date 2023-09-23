const text = [
  `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium rem iste culpa vitae quas vero nostrum perferendis tempora, eum magni labore quasi animi quidem debitis aut est illum adipisci mollitia! Minus corporis explicabo.`,

  `earum temporibus qui quisquam ipsa soluta, repudiandae fugiat impedit corrupti aut consequuntur provident quia omnis? Officiis quis saepe qui sit deserunt quam et aperiam tempore nihil, accusantium necessitatibus, atque, suscipit provident aspernatur.`,

  `Similique error aliquam obcaecati quae esse facilis veniam laborum minus, odit perspiciatis animi voluptate doloremque at laudantium in magnam amet delectus voluptatum dolor illo dignissimos accusamus ducimus! Atque dicta maxime eum impedit architecto accusamus inventore quibusdam voluptatibus nostrum! Itaque quasi ea veritatis aliquid quidem.`,

  `dignissimos placeat, ab quae porro beatae, deserunt saepe libero sunt nihil vel at aliquam magnam error cum officia. Tempore dolor veritatis corrupti modi numquam sint ratione vero, exercitationem sed voluptates libero repudiandae consequatur nam ex cupiditate nihil vel quod ipsam corporis.`,

  `Facere tenetur quaerat doloribus commodi veritatis deserunt. Rerum rem, quia enim, mollitia at minus blanditiis ab quae, hic nulla saepe. Laborum, eveniet inventore dolor ducimus tenetur fuga blanditiis qui quaerat maxime similique sit ipsum illum maiores rerum officiis et ex modi doloremque quo neque reiciendis! Commodi at itaque laborum ab quas unde.`,

  `Consectetur praesentium quisquam neque impedit excepturi, voluptatum assumenda omnis aut! Optio vero reprehenderit mollitia, nam laudantium modi, pariatur natus temporibus odit aliquid ullam qui aperiam maiores nesciunt maxime culpa impedit dicta amet obcaecati. Fugit, enim voluptas repudiandae doloremque mollitia dolores similique.`,

  `Nihil alias tempora officiis magni impedit doloribus dignissimos soluta laboriosam, velit nostrum laudantium ipsa debitis error exercitationem suscipit saepe veritatis est sequi provident possimus perferendis fuga facere dolorum. `,

  `Blanditiis, ratione. Fugiat nostrum inventore dolorum fugit iste recusandae, commodi molestiae ratione ducimus illo cupiditate perferendis deleniti! Nisi architecto a, totam illo nobis beatae quis dolorem? Nihil, consequuntur veritatis.`,

  `Facere tenetur quaerat doloribus commodi veritatis deserunt. Rerum rem, quia enim, mollitia at minus blanditiis ab quae, hic nulla saepe. Laborum, eveniet inventore dolor ducimus tenetur fuga blanditiis qui quaerat maxime similique sit ipsum illum maiores rerum officiis et ex modi doloremque quo neque reiciendis! Commodi at itaque laborum ab quas unde.`,
];

// console.log(text);

const item = document.querySelector("#noOfParas");
const paras = document.querySelector("#paras");

const generate = () => {
  const data = Number(item.value);
  console.log(typeof data);
  if (isNaN(data) || data < 0 || data > 9) {
    const randomIndex = Math.floor(Math.random() * text.length);
    console.log(randomIndex);
  } else {
    console.log("NO NONMB");
  }
};
