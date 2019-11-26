# ICE_LGS

Hosted on : https://ice-lgs.herokuapp.com/

Exigences repository : https://mi-git.univ-tlse2.fr/ECb/LGS

### Requirements

`Linux` or `Mac` for easy `shell` scripts
- docker : https://docs.docker.com/install/linux/docker-ce/ubuntu/
- docker-compose : https://docs.docker.com/compose/install/

### To start project
![](https://github.com/DenisGuiraudet/ICE_LGS/doc/local.png)

1. Go to `root` of git repository
2. Start `back` with
```
sudo ./scripts/init_back.sh
```
3. Start `front` with
```
sudo ./scripts/init_front.sh
```

### To push project on Heroku
![](https://github.com/DenisGuiraudet/ICE_LGS/doc/hosted.png)

1. Go to `root` of git repository
2. Push `back` on [Heroku](https://dashboard.heroku.com/apps/ice-lgs-back)
```
sudo ./scripts/push_back.sh
```
3. Push `front` on [Heroku](https://dashboard.heroku.com/apps/ice-lgs)
```
sudo ./scripts/push_front.sh
```

### Back Documentation

- [Back routes](/services/back/README.md)

### Thanks to

- https://closebrace.com/tutorials/2017-03-02/the-dead-simple-step-by-step-guide-for-front-end-developers-to-getting-up-and-running-with-nodejs-express-and-mongodb
- https://medium.com/statuscode/dockerising-a-node-js-and-mongodb-app-d22047e2806f

- https://zellwk.com/blog/local-mongodb/
- https://closebrace.com/tutorials/2017-03-02/the-dead-simple-step-by-step-guide-for-front-end-developers-to-getting-up-and-running-with-nodejs-express-and-mongodb
- https://docs.docker.com/compose/compose-file/
