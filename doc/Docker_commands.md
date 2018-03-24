
- [How To Remove Docker Images, Containers, and Volumes](https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes)

### List images

    docker images -a

### Remove an image

    docker rmi Image

### remove any stopped containers and all unused images

    docker system prune -a

### List running containers

    docker ps -a

### remove container

    docker rm ID_or_Name

