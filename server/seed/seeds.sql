DROP TABLE IF EXISTS videos;
DROP TABLE IF EXISTS users;

-- CreateTable
CREATE TABLE IF NOT EXISTS users (
  id SERIAL,
  first_name varchar(255) NOT NULL,
  last_name varchar(100) NOT NULL,
  user_email varchar(100) NOT NULL,
  user_password varchar(255) NOT NULL,
  created_at TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS videos (
  id SERIAL,
  user_id varchar(10) NOT NULL,
  title varchar(255) NOT NULL,
  creation_date TIMESTAMP NOT NULL,
  video_url varchar(100) NOT NULL,
  img_src varchar(255) NOT NULL,
  published BOOLEAN NOT NULL DEFAULT false
);

-- Seeds
INSERT INTO videos (user_id, title, creation_date, video_url, img_src) VALUES
 (1, 'Piano video', '01/12/2022', 'www.google.com', 'https://picsum.photos/300/300');
 
INSERT INTO videos (user_id, title, creation_date, video_url, img_src) VALUES 
 (1, 'Guitar video', '02/12/2022', 'www.youtube.com', 'https://picsum.photos/300/300');