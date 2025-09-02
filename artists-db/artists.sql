DROP TABLE IF EXISTS artists;

CREATE TABLE artists (
    artist_id INT GENERATED ALWAYS AS IDENTITY,
    name TEXT NOT NULL,
    genre TEXT NOT NULL
);

INSERT INTO artists (name, genre) VALUES
('Miles Davis', 'Jazz'),
('John Coltrane', 'Jazz'),
('Björk', 'Experimental / Electronic'),
('Aphex Twin', 'Electronic'),
('Kendrick Lamar', 'Hip-Hop'),
('J. Cole', 'Hip-Hop'),
('Radiohead', 'Alternative Rock'),
('Nirvana', 'Grunge'),
('The Beatles', 'Rock'),
('Pink Floyd', 'Progressive Rock'),
('Daft Punk', 'Electronic / House'),
('Madonna', 'Pop'),
('David Bowie', 'Rock / Glam'),
('Bob Dylan', 'Folk / Rock'),
('Aretha Franklin', 'Soul'),
('Stevie Wonder', 'Soul / R&B'),
('Taylor Swift', 'Pop / Country'),
('Billie Eilish', 'Pop'),
('Metallica', 'Heavy Metal'),
('Rihanna', 'Pop / R&B');
