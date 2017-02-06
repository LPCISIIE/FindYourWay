package entity;

import java.io.Serializable;

public class Point implements Serializable {

    private static final long serialVersionUID = 1L;

    private double longitude;
    private double latitude;

    public Point() {}

    public Point(double longitude, double latitude) {
        this.longitude = longitude;
        this.latitude = latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

}
