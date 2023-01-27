const Contacts = () => {
  return (
    <>
      <main className="section">
        <div className="container">
          <h1 className="title-1">Contacts</h1>

          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Location</h2>
              <p>Kiev, Ukraine</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Telegram / WhatsApp</h2>
              <p>
                <a href="tel:+380665016032">+38 (066) 501-60-32</a>
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Email</h2>
              <p>
                <a href="mailto:danilnikonenko04@gmail.com">
                  danilnikonenko04@gmail.com
                </a>
              </p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};
export default Contacts;
