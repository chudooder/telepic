SRC_DIR = ./src
OUT_DIR = .

default:
	pug -P -o $(OUT_DIR) $(SRC_DIR)
	browserify $(SRC_DIR)/js/index.js -o $(OUT_DIR)/js/index.js
	cp src/css/* css/

view:
	firefox index.html
