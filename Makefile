SRC_DIR = ./src
OUT_DIR = ./

default:
	pug -P -o $(OUT_DIR) $(SRC_DIR)

view:
	firefox index.html
