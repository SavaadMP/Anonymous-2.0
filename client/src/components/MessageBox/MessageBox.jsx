import "./MessageBox.scss";

const MessageBox = () => {
  return (
    <div className="message_box">
      <div className="mark_as_read">
        <input type="checkbox" />
      </div>
      <div className="msg">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In illum
          dolores totam culpa quos ullam velit magnam laboriosam fugit nemo
          suscipit iste itaque iusto minima aliquid labore modi, ab, nesciunt
          quisquam amet voluptate harum molestias ea! Voluptatum laboriosam fuga
          voluptatem ea! Hic iste fugit libero quidem. Consequuntur aperiam eius
          culpa repellendus deserunt placeat dolorem error, quaerat voluptates
          fuga! Quasi dolorem quo quibusdam animi voluptates aspernatur culpa
          voluptas? Quae aliquam repellendus, quaerat aliquid provident ipsam
          voluptatem error saepe corrupti animi molestiae reprehenderit ab neque
          laudantium nemo mollitia? Dolore rem asperiores, perferendis nobis,
          sit tempore magni quisquam quia praesentium, itaque harum nostrum!
        </p>
      </div>
      <div className="time">10:32 PM</div>
    </div>
  );
};

export default MessageBox;
