from flask import Flask, render_template, url_for

app = Flask  (__name__)

@app.route("/")
def index():
    return render_template('main.html')

@app.route("/botfn/<lol>")
def botfn(lol):
    return f"lol {lol}"

@app.route("/index", methods=["GET"])
def lol():
    return "True"

# @app.route("/register", method=["POST"])
# def register():
#     return render_template("register.html")


if __name__ == "__main__":
    app.run(debug=True)
    

