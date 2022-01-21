let departamento = prompt(
  "Ingrese uno de estos departamentos: antioquia, choco, magdalena, risaralda, huila"
);

if (departamento === "antioquia") {
  let m1 = prompt(
    "Ingrese uno de los siguientes municipios: medellin, turbo, apartado, carepa, chigorodo"
  );
  if (m1 === "medellin") {
    alert("Que mas pues");
  } else {
    if (m1 === "turbo") {
      alert("Ven a plata dulce");
    } else {
      if (m1 === "apartado") {
        alert("visita el barrio ortiz");
      } else {
        if (m1 === "carepa") {
          alert("ven a comer pescado");
        } else {
          if (m1 === "chigorodo") {
            ("pasea por este pequeño pueblo y conoce su gente");
          } else {
          }
        }
      }
    }
  }
} else {
  if (departamento === "choco") {
    let m2 = prompt(
      "Ingrese uno de los siguientes municipios: quibdo, itsmina, bagado, tado, lloro "
    );
    if (m2 === "quibdo") {
      alert("Ven a conocer los rios de quibdo");
    } else {
      if (m2 === "itsmina") {
        alert("En itsmina la gente si que sabe gozar");
      } else {
        if (m2 === "bagado") {
          ("Debes venir a probar el sancocho de pescado");
        } else {
          if (m2 === "tado") {
            alert("El arroz de cangrejo y coco es lo mejor");
          } else {
            if (m2 === "lloro") {
              alert("EL pescado con guisado con coco es lo mejor");
            } else {
            }
          }
        }
      }
    }
  } else {
    if (departamento === "magdalena") {
      let m3 = prompt(
        "Ingrese uno de los siguientes municipios: cienaga, ariguani, pedraza, pivijay, guamal"
      );
      if (m3 === "cienga") {
        alert("Ven visita la playa de cienaga");
      } else {
        if (m3 === "ariguani") {
          alert(
            "El nombre ariguani, proviene de un vocablo indígena y significa Corriente de Aguas Claras"
          );
        } else {
          if (m3 === "pedraza") {
            alert(
              "Pedraza es un municipio colombiano ubicado en el oriente del departamento del Magdalena a 215 km de Santa Marta y a orillas del Río Magdalena"
            );
          } else {
            if (m3 === "pivijay") {
              alert(
                "Pivijay​ es uno de los municipios de Colombia, que se encuentra en el departamento del Magdalena. Pivijay constituye uno de los 30 municipios del Departamento que está ubicado al norte de la república de Colombia, dentro de la región Caribe de Colombia"
              );
            } else {
              if (m3 === "guamal") {
                alert(
                  "Guamal es un municipio localizado en la margen oriental del brazo de Mompóx, del río Magdalena, en la subregión sur del departamento del Magdalena, Colombia. Se encuentra a 330 kilómetros de Santa Marta."
                );
              } else {
              }
            }
          }
        }
      }
    } else {
      if (departamento === "risaralda") {
        let m4 = prompt(
          "Ingrese unos de los siguientes municipios: pereira, balboa, virginia, guatica, apia"
        );
        if (m4 === "pereira") {
          alert(
            "Pereira es una ciudad de una región montañosa cafetera en el oeste de Colombia, conocida por el café arábica suave. La plaza principal, Plaza de Bolívar, tiene una estatua del héroe de la independencia Simón Bolívar desnudo a caballo."
          );
        } else {
          if (m4 === "balboa") {
            alert(
              "El municipio de Balboa se encuentra ubicado en el Departamento de Risaralda, a una distancia de 49 kilómetros aproximadamente de la capital Pereira."
            );
          } else {
            if (m4 === "virginia") {
              alert(
                "La Virginia es un municipio colombiano del departamento de Risaralda. Se encuentra localizado a unos 23 kilómetros en coche de la ciudad de Pereira, hacia el occidente del país. Sus terrenos son planos a ondulados, bañados por las aguas de los ríos Cauca y Risaralda y las de algunas quebradas de menor caudal."
              );
            } else {
              if (m4 === "guatica") {
                alert(
                  "Guática es un municipio del departamento de Risaralda en Colombia, se encuentra a 93 km al norte de Pereira, sus territorios son montañosos, haciendo parte de la Cordillera Occidental,"
                );
              } else {
                if (m4 === "apia") {
                  alert(
                    "El municipio de Apía en Risaralda, Colombia está ubicado sobre territorio montañoso cuyo relieve corresponde a la vertiente oriental de la cordillera occidental de los Andes, con un relieve montañoso, 214 km² a una altura, de 1630 m s. n. m., lo que motiva una temperatura muy agradable promedio de 19 °C."
                  );
                } else {
                }
              }
            }
          }
        }
      } else {
        if (departamento === "huila") {
          let m5 = prompt(
            "Ingrese uno de los siguientes municipios: neiva, tello, teruel, baraya, plata"
          );
          if (m5 === "neiva") {
            alert(
              "Neiva es un municipio colombiano, capital del departamento de Huila. Yace entre la cordillera Central y Oriental, en una planicie sobre la margen oriental del río Magdalena, en el valle del mismo nombre, cruzada por el río Las Ceibas y el río del Oro"
            );
          } else {
            if (m5 === "tello") {
              alert(
                "Tello es un municipio colombiano ubicado en el departamento de Huila. Se caracteriza por su extensa llanura comprendida entre el río Magdalena y el pie de la cordillera oriental hasta sus cimas, con más de 3000 msnm, regados por las aguas de los ríos Fortalecillas y Villavieja"
              );
            } else {
              if (m5 === "teruel") {
                alert(
                  "Teruel es un municipio colombiano ubicado en el departamento de Huila. Se caracteriza por ser un territorio montañoso en su mayoría, gracias a que pertenece a la cordillera central,"
                );
              } else {
                if (m5 === "baraya") {
                  alert(
                    "Baraya es un municipio colombiano ubicado en el departamento de Huila. Yace sobre la vertiente oriental del valle alto del río Magdalena, hacia las estribaciones del flanco occidental de la cordillera oriental. Su extensión territorial es de 737 km², su altura es de 730 msnm y su temperatura promedio es de 28ºC."
                  );
                } else {
                  if (m5 === "plata") {
                    alert(
                      "La Plata es un municipio colombiano localizado en el suroccidente del departamento del Huila. Está ubicado en las estribaciones de la Cordillera Central bañados por las aguas de los ríos Aguacatal, la Plata y Páez"
                    );
                  } else {
                  }
                }
              }
            }
          }
        } else {
        }
      }
    }
  }
}
